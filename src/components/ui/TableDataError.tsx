type TMessageProps = {
  message: string;
};

const TableDataError = ({ message }: TMessageProps) => {
  return (
    <div className="bg-red-200 px-4 py-2 text-red-800 rounded  w-full">
      <span className="block text-sm">{message}</span>
    </div>
  );
};

export default TableDataError;
