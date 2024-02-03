import React from 'react';

interface IInputLoginProps {
  type?: string;
  label: string;
  value: string;
  onPressEnter?: () => void;
  onChange: (newValue: string) => void;
}
const Input = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
  return (
    <div className="flex flex-col gap-0.5"  >
      <label className="font-medium font-Montserrat text-xl text-branco" >{props.label}</label>
      <input
        className='h-10 p-2 bg-ad bg-opacity-50 text-[#CCC] border border-[#6F7DFF29] border-opacity-100 focus-within:outline focus-visible:outline-white/40 focus:border-none rounded-md'
        ref={ref}
        type={props.type}
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
        onKeyDown={e => e.key === 'Enter'
          ? props.onPressEnter && props.onPressEnter()
          : undefined
        }
      />
    </div>
  );
});

export default Input