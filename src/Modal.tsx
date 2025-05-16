import { useRef } from 'react';

interface IModal {
  headerLabel: string;
  isOpen: boolean;
  onCloseRequested: () => void;
  children: React.ReactNode;
}

function Modal(props: IModal) {
  const innerDivRef = useRef<HTMLDivElement>(null);

  function handleModalClicked(e: React.MouseEvent<HTMLElement>) {
    // check if the inner div refernce isn't null and then check which part the user clicked
    if (innerDivRef.current && !innerDivRef.current?.contains(e.target as Node)) {
      props.onCloseRequested();
    }
  }

  if (!props.isOpen) {
    return null;
  }

  return (
    <div
      className="flex items-center justify-center fixed inset-0 bg-blue-500/20"
      onClick={handleModalClicked}>
      <div
        className="flex flex-col gap-[1rem] bg-white text-center rounded-lg p-[1.5rem]"
        ref={innerDivRef}>
        <header className="flex justify-between">
          <h1 className="text-xl">{props.headerLabel}</h1>
          <button
            className="text-xl font-medium text-gray-500"
            aria-label="Close"
            onClick={props.onCloseRequested}>X</button>
        </header>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;