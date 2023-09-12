import { Route, Switch } from "wouter";
import HotelList from "./components/HotelList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HotelDetail from "./components/HotelDetail";

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <Switch>
        <Route path="/" component={HotelList} />
        <Route path="/hotel/:id" component={HotelDetail} />
      </Switch>
    </QueryClientProvider>
  );
}

export default App;
