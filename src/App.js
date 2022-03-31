import { QueryClient, QueryClientProvider} from 'react-query'
import Posts from './components/Posts';
import './App.css';


// TODO: Check on why its not displaying content on the browser

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
       <Posts />
    </QueryClientProvider>
  );
}

export default App;
