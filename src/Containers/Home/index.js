import QueryEditor from "Components/QueryEditor";
import { useRef} from "react";

/**
 * Home Component
 *
 * Can have routing logic to render different Layouts/pages
 * for different routes,  devices etc.
 */
const Home = () => {
  const runQueryFunc = useRef(null)
  
  const runQuery = () => {
    if(runQueryFunc.current === null) {
      return;
    }

    console.log('Running Current Query!')

    runQueryFunc.current();
  }

  return (
    <>
      <QueryEditor onRunQuery={() => {}} runQueryFunctionRef={runQueryFunc}/>

      <button onClick={runQuery}>Run Query</button>
    </>
    
  );
};

export default Home;
