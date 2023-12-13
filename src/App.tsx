import labResults from "./data/labs.json";
// import noResults from "./data/noResults.json";

interface Laboratories {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface APIResults {
  results: Laboratories[];
  Error?: string;
  Response?: string;
  totalResults: string;
}

function App() {
  const labs: Laboratories[] = labResults.results;
  const hasLabs = labs?.length > 0;

  // useEffect(() => {
  //   set url of the API Rest endpoint here into the parentheses
  //   //   fetch()
  //     .then(async (res) => await res.json())
  //     .then((res: APIResults) => {
  //       setLabs(res.results);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <main>
      <h1>List of Laboratories</h1>

      <p className="read-the-docs">Laboratories info</p>
      {!hasLabs && <p>No labs found</p>}
      {hasLabs &&
        labs.map((lab) => (
          <ul key={lab.id}>
            <h4>{lab.name}</h4>
            <li>{lab.address}</li>
            <li>{lab.phone}</li>
            <li>{lab.email}</li>
          </ul>
        ))}
    </main>
  );
}

export default App;
