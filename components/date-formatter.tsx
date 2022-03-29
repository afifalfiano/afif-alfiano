type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = new Date(dateString).toLocaleDateString('id-ID', {year:"numeric",month:"long", day:"numeric"});
  return <time >{date}</time>
}

export default DateFormatter
