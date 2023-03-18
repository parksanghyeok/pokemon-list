interface DetailListType {
  title: string;
  children: any;
}

const DetailList = ({ title, children }: DetailListType) => {
  return (
    <div className="">
      <p className="mb-[5px] font-bold">{ title }</p>
      { children }
    </div>
  )
};

export default DetailList;