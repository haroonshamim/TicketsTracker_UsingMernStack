 const initialTickets = [
  {id:1, title:"This is Ticket 1 Title", Status:"This is Ticket 1 Status", Owner:"This is Ticket 1 Owner", effort:"This is Ticket 1 Effort", created:"2024-01-01", due:"2024-01-10"},
  {id:2, title:"This is Ticket 2 Title", Status:"This is Ticket 2 Status", Owner:"This is Ticket 2 Owner", effort:"This is Ticket 2 Effort", created:"2024-02-01", due:"2024-02-10"},
];

class TicketTable extends React.Component
{ 

  constructor()
  {
    super();
    this.state={tickets: initialTickets};
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