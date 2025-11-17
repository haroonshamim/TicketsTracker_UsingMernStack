class TicketRow extends React.Component
{
render()
{
  {
    const style=this.props.rowStyle;
    return (
        <tr>
            <td style={style}>{this.props.ticket_ID}</td>
            {this.props.children}
        </tr> 
    );
}
}
}