import { forwardRef, TextareaHTMLAttributes } from 'react';

interface IInputLoginProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  value: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, IInputLoginProps>((props, ref) => {
  const { label, ...textareaProps } = props;



  return (
    <div className="flex flex-col gap-0.5" >
      <label className="font-medium font-Montserrat text-xl text-branco" >{label}</label>
      <textarea
        className='h-10 p-2 bg-ad bg-opacity-50 text-[#CCC] border border-[#6F7DFF29] border-opacity-100 focus-within:outline focus-visible:outline-white/40 focus:border-none rounded-md'
        {...textareaProps}
        ref={ref}
      />
    </div>
  );
});

export default TextArea
