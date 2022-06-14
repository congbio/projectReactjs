 function App() {
        const [listProduct,setListProduct] = useState([]); 
        const [type, setType] = useState('') 

        const getData = () => {
        axios.get("http://localhost:3000/hote")
        .then((res) => {
                setListProduct(res.data);
            });
        }
        useEffect(() => {
            // console.info(Math.random())
            getData()
            
        },[])
         

        const changeTypeProduct=(type)=>{
        
            setType(type)
        }
        return (
            <>
            listProduct.map((product) => ()
                   
            </>
        );
    }


    export default App;