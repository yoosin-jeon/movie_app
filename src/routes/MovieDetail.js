import React from "react";
import Movie from "../components/Movie";

class Detail extends React.Component{
    componentDidMount(){
        console.log(this.props);
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return (
                <Movie 
                key={location.state.id}
                id={location.state.id} 
                year={location.state.year} 
                title={location.state.title} 
                summary={location.state.summary}
                poster={location.state.poster} 
                genres={location.state.genres}
            /> 
            );
        }else{
            return null;
        }
        
    }
}
export default Detail;

// function MovieDetail(props){
//     console.log(props.location.state);
//     const state = props.location.state;
//     console.log({state});
//     return (
//         <Movie 
//         key={state.id}
//         id={state.id} 
//         year={state.year} 
//         title={state.title} 
//         summary={state.summary}
//         poster={state.poster} 
//         genres={state.genres}
//       /> 
//     );
// }

// export default MovieDetail;