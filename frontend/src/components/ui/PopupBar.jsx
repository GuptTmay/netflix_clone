import { Plus, X } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
const PopupBar = ({ index, ques, ans, openPanel, setOpenPanel }) => {
  return (
    <div className='w-full'>
      <div
        onClick={() => setOpenPanel(openPanel === index ? null : index)}
        className="mb-0.5 w-full flex cursor-pointer items-center justify-between bg-zinc-800 px-3 py-2 text-lg font-medium text-white hover:bg-neutral-700 sm:px-6 sm:py-4 sm:text-2xl"
      >
        <h2>{ques}</h2>
        {openPanel === index ? (
          <X className="h-6 w-6 sm:h-12 sm:w-12" strokeWidth="1px" />
        ) : (
          <Plus className="h-6 w-6 sm:h-12 sm:w-12" strokeWidth="1px" />
        )}
      </div>

      <AnimatePresence initial={false}>
        {openPanel === index && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="overflow-hidden bg-zinc-800 px-6 py-4"
          >
            <p
              className="text-lg leading-6 sm:leading-normal sm:text-2xl text-white"
              dangerouslySetInnerHTML={{ __html: ans }}
            ></p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PopupBar;

// import React from 'react';
// import { Plus } from 'lucide-react';

// const PopupBar = ({ ques, ans }) => {
//   const [open, setOpen] = React.useState(false);
//   return (
//     <div>
//       <div onClick={() => setOpen(prev => !prev)} className="flex cursor-pointer items-center justify-between bg-zinc-800 px-6 py-4 text-2xl font-medium text-white hover:bg-neutral-700">
//         <h2>{ques}</h2>
//         <Plus className="h-12 w-12" strokeWidth="1px" />
//       </div>

//       {open && (
//         <div className="mt-0.5 flex transition-all duration-300 ease-in-out items-center bg-zinc-800 px-6 py-4">
//           <p className="text-lg text-gray-400">{ans}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PopupBar;
