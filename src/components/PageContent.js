import { motion } from "framer-motion";

// This wrapper component is for the transition animation
const PageContent = ({ children }) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
};

export default PageContent;
