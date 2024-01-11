import { motion } from "framer-motion";
import { Button } from "react-aria-components";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="grid justify-items-center absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <h2 className="text-2xl font-bold">Oh no...</h2>
      <span className="text-lg font-medium text-center">
        It looks like you couldn't catch'em all
      </span>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{
          scale: 0.9,
          transition: { duration: 0.2 },
        }}
        className="outline-none"
      >
        <Button
          onPress={() => navigate(0)}
          className="mt-5 py-2 px-4 outline-none rounded-lg bg-red-500 text-gray-100 font-medium text-lg transition-all focus-visible:ring-4 ring-red-500 ring-offset-4"
        >
          Refresh
        </Button>
      </motion.div>
    </div>
  );
};
