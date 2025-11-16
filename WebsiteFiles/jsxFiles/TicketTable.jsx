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
                    <TicketRow rowStyle={rowstyle} ticket_ID="This is Ticket 1 ID" 
                    ticket_Title="This is Ticket 1 Title" 
                    ticket_Status="This is Ticket 1 Status" 
                    ticket_Owner="This is Ticket 1 Owner" 
                    ticket_Effort="This is Ticket 1 Effort"/>

                         <TicketRow rowStyle={rowstyle} ticket_ID="This is Ticket 2 ID" 
                    ticket_Title="This is Ticket 2 Title" 
                    ticket_Status="This is Ticket 2 Status" 
                    ticket_Owner="This is Ticket 2 Owner" 
                    ticket_Effort="This is Ticket 2 Effort"/>
                   
                    
            </tbody>
       </table>
    );
  
}
}