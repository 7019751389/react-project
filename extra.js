// function App() {

//   const [headerState, udatedHeaderState] = useState(headers);
//   const [navBarState, updatedNavBarState] = useState(links);

  // const HandleButton = () => {
  //   udatedHeaderState({
  //     header: "modified headerusing state",
  //     desc: "you learn diffret things",
  //   });

  //   navBarState.unshift("myProfile", "lists");
  //   updatedNavBarState(navBarState);
  // };
  
  // return (
  //   <div className="App">
  //     <button onClick={HandleButton}>press here</button>
  //     <Header {...headerState} />

  //     <Navbar links={navBarState} />

  //     <Content />

  //     <Footer />
  //   </div>
  // );
// }

// export default App;
const addLinks = ["myProfile", "lists"];
for(let i=0;i<addLinks.length;i++){
  if(!navBarState.includes(addLinks[i])){
   newstate.navBarState.push(this.addLinks)
  }
}
this.setState(newstate);