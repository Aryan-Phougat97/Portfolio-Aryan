import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

interface LoadingState {
  text: string;
}

interface MultiStepLoaderProps {
  loadingStates: LoadingState[];
  loading: boolean;
  duration?: number;
}

export const MultiStepLoader = ({
  loadingStates,
  loading,
  duration = 2000,
}: MultiStepLoaderProps) => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    if (loading) {
      setCurrentState(0);
      const interval = setInterval(() => {
        setCurrentState((prev) => {
          if (prev < loadingStates.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, duration / loadingStates.length);

      return () => clearInterval(interval);
    }
  }, [loading, loadingStates.length, duration]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="glass-effect rounded-2xl p-8 max-w-md w-full mx-4"
          >
            <div className="space-y-6">
              {loadingStates.map((state, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: index <= currentState ? 1 : 0.3,
                    x: 0,
                  }}
                  className="flex items-center gap-3"
                >
                  {index < currentState ? (
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                  ) : index === currentState ? (
                    <Loader2 className="h-6 w-6 text-primary animate-spin flex-shrink-0" />
                  ) : (
                    <div className="h-6 w-6 rounded-full border-2 border-muted flex-shrink-0" />
                  )}
                  <p
                    className={`text-lg ${
                      index <= currentState ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {state.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
