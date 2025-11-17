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
                   <TicketRow 
                    rowStyle={rowstyle}
                    ticket_ID="This is Ticket 1 ID"
                  >
                    <td style={rowstyle}>This is Ticket 1 Title</td>
                    <td style={rowstyle}>This is Ticket 1 Status</td>
                    <td style={rowstyle}>This is Ticket 1 Owner</td>
                    <td style={rowstyle}>This is Ticket 1 Effort</td>
                  </TicketRow>

                         
                    
            </tbody>
       </table>
    );
  
}
}