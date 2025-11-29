class TicketList extends React.Component
{

render()
{
return (<React.Fragment>
            <h1>Ticket Tracker</h1>
             <TicketFilter/>
            <hr/>
            <TicketTable/>
            <hr/>
            <TicketAdd/>
            <hr/>
     
        
           
         
        </React.Fragment>
        
    );
}
}
const element = <TicketList/>
ReactDOM.render(element, document.getElementById('root'))
