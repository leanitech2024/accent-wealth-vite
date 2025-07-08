const ContentRenderer = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none">
      {content.map((item, index) => {
        switch (item.type) {
          case 'paragraph':
            return (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                {item.text.split('**').map((part, i) =>
                  i % 2 === 0 ? part : <strong key={i} className="text-[#8a7208]">{part}</strong>
                )}
              </p>
            );

          case 'heading': { 
            const HeadingTag = `h${item.level}`;
            return (
              <HeadingTag key={index} className={`font-bold text-gray-900 mb-4 ${
                item.level === 2 ? 'text-2xl mt-8' : 'text-xl mt-6'
              }`}>
                {item.text}
              </HeadingTag>
            );
          } 

          case 'list':
            return (
              <ul key={index} className="mb-6 space-y-3">
                {item.items.map((listItem, i) => (
                  <li key={i} className="text-gray-700 leading-relaxed">
                    {listItem.text.split('**').map((part, j) =>
                      j % 2 === 0 ? part : <strong key={j} className="text-[#8a7208]">{part}</strong>
                    )}
                  </li>
                ))}
              </ul>
            );

          case 'table':
            return (
              <div key={index} className="mb-8 overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-[#8a7208] text-white">
                      {item.headers.map((header, i) => (
                        <th key={i} className="border border-gray-300 px-4 py-3 text-left font-semibold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.rows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        {row.map((cell, j) => (
                          <td key={j} className="border border-gray-300 px-4 py-3 text-gray-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ContentRenderer;