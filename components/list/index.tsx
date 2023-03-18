interface ListItemProp {
  id: string;
  name: string;
  onClick: any
}

const ListItem = ({ id, name, onClick }: ListItemProp) => {
  return (
    <div className="flex items-center w-full h-[55px] px-4 rounded shadow-[6px_4px_14px_5px_rgba(0,0,0,0.21)] cursor-pointer" onClick={ onClick }>
      <img
        className="h-full"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`}
      />
      <p className="ml-[40px]">{ name }</p>
    </div>
  )
}

export default ListItem;