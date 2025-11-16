class TicketRow extends React.Component
{
render()
{
  {
    //const style={border:"1px solid silver",padding:"4px"};
    const style=this.props.style;
    return (

        <tr>
            <td style={style}>{this.props.ticket_ID}</td>
            <td style={style}>{this.props.ticket_Title}</td>
            <td style={style}>{this.props.ticket_Status}</td>
            <td style={style}>{this.props.ticket_Owner}</td>
            <td style={style}>{this.props.ticket_Effort}</td>
        </tr>
    );
}
}
}