type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = new Date(dateString).toLocaleDateString('en-US', {year:"numeric",month:"long", day:"numeric"});
  return <time >Post on {date}</time>
}

export default DateFormatter
