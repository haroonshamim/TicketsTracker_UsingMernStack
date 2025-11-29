 const initialTickets = [
  {id:1, title:"This is Ticket 1 Title", Status:"This is Ticket 1 Status", Owner:"This is Ticket 1 Owner", effort:"This is Ticket 1 Effort", created:"2024-01-01", due:"2024-01-10"},
  {id:2, title:"This is Ticket 2 Title", Status:"This is Ticket 2 Status", Owner:"This is Ticket 2 Owner", effort:"This is Ticket 2 Effort", created:"2024-02-01", due:"2024-02-10"},
];
const sampleTicket={title:"This is Newly Added Ticket 3", Status:"New", Owner:"Unassigned", effort:"0"};

class TicketTable extends React.Component
{ 

  constructor()
  {
    super();
    this.state={tickets: []};
   /*  setTimeout(() => {
      this.createTicket(sampleTicket);
    }, 500); */
  }
  componentDidMount()
  {
    this.loadData();
  }
  loadData()
  {
    setTimeout(() => {
      
      this.setState({tickets: initialTickets});
           
      
      setTimeout(() => {
      this.createTicket(sampleTicket);
    }, 600);
    
/*     setTimeout(() => {
      this.createTicket(sampleTicket);
    }, 600); */
    
    },500); 


  }
  createTicket(ticket)
  {
    ticket.id=this.state.tickets.length+1;
    ticket.created=new Date();
    ticket.due=new Date(new Date().getTime() + 24*60*60*1000);
    const newTicketList=this.state.tickets.slice();
    newTicketList.push(ticket);
    this.setState({tickets:newTicketList});
  }
render()
{
    const rowstyle = {   border: "2px solid black",
      padding: "8px",     // more spacing inside cells
      width: "180px",     // increase column width
      textAlign: "left",   // left-align text
      backgroundColor: "#f2f2f2" // light gray background for better readability
    };

  /*   const Tickets=[{id:1, title:"This is Ticket 1 Title", Status:"This is Ticket 1 Status", Owner:"This is Ticket 1 Owner", effort:"This is Ticket 1 Effort", created:"2024-01-01", due:"2024-01-10"},
      {id:2, title:"This is Ticket 2 Title", Status:"This is Ticket 2 Status", Owner:"This is Ticket 2 Owner", effort:"This is Ticket 2 Effort", created:"2024-02-01", due:"2024-02-10"},
    ]; */

  const TicketRows=this.state.tickets.map(ticket => <TicketRow key={ticket.id} rowStyle={rowstyle} ticket={ticket}/>);

  return (
<table className="bordered-table" style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Owner</th>
                    <th>Effort</th>
                    <th>Created Date</th>
                    <th>Due Date</th>
                </tr>
            </thead>    
           
           
              <tbody>
          {TicketRows}
        </tbody>
            
        
       </table>
    );
  
}

}