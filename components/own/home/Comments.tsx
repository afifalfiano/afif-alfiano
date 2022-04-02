
const Comments = () => {
  return (
    <div className="w-full">
        <div id="comments" ref={
        element => {
          if (!element) {
            return
          }

          const scriptElement = document.createElement('script')
          scriptElement.setAttribute('src', 'https://utteranc.es/client.js')
          scriptElement.setAttribute('repo', 'afifalfiano/afif-alfiano')
          scriptElement.setAttribute('issue-term', 'pathname')
          scriptElement.setAttribute('theme', 'github-dark-orange')
          scriptElement.setAttribute('crossorigin', 'anonymous')
          scriptElement.setAttribute('async', 'true')
          element.replaceChildren(scriptElement)
        }
      }></div>
    </div>
  );
};

export default Comments;
