function ListGroup() {
  const items = ["Ella", "Thea", "Sarah", "David", "Jambo"];

  return (
    <>
      <h1>list-groupp</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// {items.length === 0 ? <p>no item found</p> : null}
//functions
/*
const getMessage = () => {
   return items.length === 0 ? <p>no item found</p> : null;;
}

const handleClick  = (event: MouseEvenet) => console.log(event);



*/
