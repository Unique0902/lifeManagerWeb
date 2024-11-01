interface DynamicFormProps<T> {
  data: T;
  onChange: (updatedData: T) => void;
  handleSubmit?: (data: T) => void;
}

function DynamicForm<T extends { [key: string]: string | boolean }>({
  data,
  onChange,
  handleSubmit,
}: DynamicFormProps<T>) {
  const handleChange = (key: keyof T, value: string | boolean) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <form
      className='flex flex-col gap-[12px]'
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit && handleSubmit(data);
      }}
    >
      {Object.keys(data).map((key) => {
        const value = data[key as keyof T];

        if (typeof value === 'string') {
          return (
            <div key={key} className='flex flex-row gap-[12px] items-center'>
              <label>{key}</label>
              <input
                type='text'
                value={value as string}
                className='border border-black text-black'
                onChange={(e) => handleChange(key as keyof T, e.target.value)}
              />
            </div>
          );
        }

        if (typeof value === 'boolean') {
          return (
            <div key={key} className='flex flex-row gap-[12px] items-center'>
              <label>{key}</label>
              <input
                type='checkbox'
                checked={value as boolean}
                onChange={(e) => handleChange(key as keyof T, e.target.checked)}
              />
            </div>
          );
        }

        return null;
      })}
      <div className='flex flex-row gap-[8px]'>
        <button type='button'>취소</button>
        <button>저장</button>
      </div>
    </form>
  );
}

export default DynamicForm;
