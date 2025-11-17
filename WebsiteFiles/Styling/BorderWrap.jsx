class BorderWrap extends React.Component {
render()
{
    const style={border:"1px solid silver",padding:"4px",margin:"4px"};
    return (
        <div style={style}>
            {this.props.children}
        </div>
    );
}
}