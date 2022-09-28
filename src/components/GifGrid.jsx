const GifGrid = ({category, items}) => {
  return (
    <>
        <h3>{category}</h3>
        <ul></ul>
        { items && items.map(item => (
            <li>{item}</li>
        ))}
    </>
  )
}

export default GifGrid