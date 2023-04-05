import Card from './card';

function Cards(props){
  const {characters} = props;

  return(
    <div className='container'>
      {
        characters.map(({id, name, species, gender, image})=>{
          return(
            <Card 
              name={name}
              species={species}
              gender={gender}
              image={image}
              onClose={()=>props.onClose(id)}
              id = {id}
            />
          )
        })
      }
    </div>
  )
};

export default Cards;
