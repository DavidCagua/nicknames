import ListElement from "./ListElement";

function ListNicknames({ names, order }) {
  let list = [...names].reverse();
  return (
    <>
      <h1>{order}</h1>
      <ul>
        {(order === "ASC" ? names : list).map((name, index) => {
          const key = name === " " ? `noname${index}` : name.replace(/\s/g, "");
          return <ListElement key={key} name={name} />;
        })}
      </ul>
    </>
  );
}

export default ListNicknames;
