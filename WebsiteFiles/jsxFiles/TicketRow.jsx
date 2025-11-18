class TicketRow extends React.Component
{
render()
{ const ticket = this.props.ticket; 
  {
    const style=this.props.rowStyle;
    
    return (
        <tr>
          {/*   <td style={style}>{this.props.ticket_ID}</td>
            {this.props.children} */}
           

            <td style={style}>{this.props.ticket.id}</td>
            <td style={style}>{ticket.title}</td>
            <td style={style}>{ticket.Status}</td>
            <td style={style}>{ticket.Owner}</td>
            <td style={style}>{ticket.effort}</td>
        </tr> 
    );
}
}
}