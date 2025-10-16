export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Get Discord webhook URLs from environment variables
    const webhookUrls = [
      process.env.DISCORD_WEBHOOK_URL || process.env.VITE_DISCORD_WEBHOOK_URL,
      process.env.DISCORD_WEBHOOK_URL_2 || process.env.VITE_DISCORD_WEBHOOK_URL_2,
    ].filter(Boolean); // Remove undefined/null values

    if (webhookUrls.length === 0) {
      console.error('Discord webhook URL not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Validate webhook URL formats
    for (const webhookUrl of webhookUrls) {
      if (!webhookUrl.startsWith('https://discord.com/api/webhooks/') &&
          !webhookUrl.startsWith('https://discordapp.com/api/webhooks/')) {
        console.error('Invalid Discord webhook URL format:', webhookUrl);
        return res.status(500).json({ error: 'Server configuration error' });
      }
    }

    // Create Discord embed message with sanitized content
    const discordMessage = {
      embeds: [
        {
          title: '📬 New Contact Form Submission',
          color: 5814783,
          fields: [
            {
              name: '👤 Name',
              value: name.substring(0, 256), // Discord field value limit
              inline: true,
            },
            {
              name: '📧 Email',
              value: email.substring(0, 256), // Discord field value limit
              inline: true,
            },
            {
              name: '💬 Message',
              value: message.substring(0, 1024), // Discord field value limit
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    // Send to all Discord webhooks
    const sendPromises = webhookUrls.map(async (webhookUrl) => {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Discord API error:', response.status, errorText);
        throw new Error(`Discord API returned ${response.status}: ${errorText}`);
      }

      return response;
    });

    // Wait for all webhooks to be sent
    await Promise.all(sendPromises);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending to Discord:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
