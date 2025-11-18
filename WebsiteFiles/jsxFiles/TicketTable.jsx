class TicketTable extends React.Component
{ 
render()
{
    const rowstyle = {   border: "2px solid black",
      padding: "8px",     // more spacing inside cells
      width: "180px",     // increase column width
      textAlign: "left",   // left-align text
      backgroundColor: "#f2f2f2" // light gray background for better readability
    };

    const Tickets=[{id:1, title:"This is Ticket 1 Title", Status:"This is Ticket 1 Status", Owner:"This is Ticket 1 Owner", effort:"This is Ticket 1 Effort"},
      {id:2, title:"This is Ticket 2 Title", Status:"This is Ticket 2 Status", Owner:"This is Ticket 2 Owner", effort:"This is Ticket 2 Effort"},
    ];
  const TicketRows=Tickets.map(ticket => <TicketRow key={ticket.id} rowStyle={rowstyle} ticket={ticket}/>);

  return (
<table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
                <tr>
                    <th style={rowstyle}>ID</th>
                    <th style={rowstyle}>Title</th>
                    <th style={rowstyle}>Status</th>
                    <th style={rowstyle}>Owner</th>
                    <th style={rowstyle}>Effort</th>
                </tr>
            </thead>    
           
           
              <tbody>
          {TicketRows}
        </tbody>
            
        
       </table>
    );
  
}

}