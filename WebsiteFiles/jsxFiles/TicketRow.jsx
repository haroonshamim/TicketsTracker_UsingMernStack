class TicketRow extends React.Component
{
render()
{ const ticket = this.props.ticket; 
  {
    const style=this.props.rowStyle;
     console.log("Rendering TicketRow → ID:", ticket.id, "Title:", ticket.title);
    return (
      
   

        <tr>
          {/*   <td style={style}>{this.props.ticket_ID}</td>
            {this.props.children} */}
           

            <td >{this.props.ticket.id}</td>
            <td >{ticket.title}</td>
            <td >{ticket.Status}</td>
            <td>{ticket.Owner}</td>
            <td>{ticket.effort}</td>
            <td>{ticket.created ? new Date(ticket.created).toDateString() : ''}</td>
            <td>{ticket.due ? new Date(ticket.due).toDateString() : ''}</td>
        </tr> 
    );
}
}
}