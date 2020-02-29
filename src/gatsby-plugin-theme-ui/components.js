export default {
  a: props => (
    <a href={`#${props.id}`}>{props.children}</a>
  )
}
