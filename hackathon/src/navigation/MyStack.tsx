import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index  from '../pages/Index';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Refeitorio from "../pages/TicketAlmoco";
import Onibus from '../pages/Onibus';
import TicketBus from '../pages/TicketBus';
import Horario from '../pages/Horario';
import Pagamento from '../pages/Pagamento';

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Index" //AQUI TEM QUE FICAR Index TO TIRANDO PRA NAO RODAR VARIAAS VEZES
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Refeitorio" component={Refeitorio} />
            <Stack.Screen name="Onibus" component={Onibus} />
            <Stack.Screen name="TicketBus" component={TicketBus} />
            <Stack.Screen name="Horario" component={Horario} />
            <Stack.Screen name="Pagamento" component={Pagamento} />
        </Stack.Navigator>
    );
}

export default MyStack;