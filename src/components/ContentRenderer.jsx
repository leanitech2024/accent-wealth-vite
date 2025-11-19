const ContentRenderer = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none">
      {content.map((item, index) => {
        switch (item.type) {
          case 'paragraph':
            return (
              <p
                key={index}
                className="mb-8 text-gray-800 leading-relaxed text-lg font-normal tracking-wide"
              >
                {item.text.split('**').map((part, i) =>
                  i % 2 === 0 ? (
                    part
                  ) : (
                    <strong
                      key={i}
                      className="text-[#8a7208] font-semibold bg-linear-to-r from-[#8a7208] to-[#6b5a06] bg-clip-text "
                    >
                      {part}
                    </strong>
                  )
                )}
              </p>
            );

          case 'heading': {
            const HeadingTag = `h${item.level}`;
            const headingStyles = {
              2: 'text-3xl mt-12 mb-6 font-bold bg-gradient-to-r from-gray-900 via-[#8a7208] to-gray-900 bg-clip-text text-transparent',
              3: 'text-2xl mt-10 mb-5 font-semibold text-gray-900 relative pl-4 before:content-[""] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#8a7208] before:to-[#6b5a06] before:rounded-full',
              4: 'text-xl mt-8 mb-4 font-medium text-gray-800 border-l-4 border-[#8a7208] pl-4 bg-gradient-to-r from-amber-50 to-transparent py-2',
            };

            return (
              <HeadingTag
                key={index}
                className={
                  headingStyles[item.level] ||
                  'text-lg mt-6 mb-3 font-medium text-gray-800'
                }
              >
                {item.text}
              </HeadingTag>
            );
          }

          case 'list': {
            const isNumbered = item.listType === 'numbered' || item.ordered;
            const ListTag = isNumbered ? 'ol' : 'ul';

            return (
              <div
                key={index}
                className="mb-8 bg-linear-to-r from-gray-50 to-amber-50 rounded-xl p-6 border-l-4 border-[#8a7208] shadow-sm"
              >
                <ListTag
                  className={`space-y-4 ${
                    isNumbered ? 'counter-reset-list' : ''
                  }`}
                >
                  {item.items.map((listItem, i) => (
                    <li
                      key={i}
                      className={`text-gray-700 leading-relaxed text-lg flex items-start gap-3 ${
                        isNumbered ? 'numbered-item' : ''
                      }`}
                    >
                      {isNumbered ? (
                        <span className="shrink-0 w-7 h-7 bg-linear-to-r from-[#8a7208] to-[#6b5a06] rounded-full flex items-center justify-center text-white font-semibold text-sm mt-1">
                          {i + 1}
                        </span>
                      ) : (
                        <span className="shrink-0 w-2 h-2 bg-linear-to-r from-[#8a7208] to-[#6b5a06] rounded-full mt-3"></span>
                      )}
                      <span className="flex-1">
                        {listItem.text.split('**').map((part, j) =>
                          j % 2 === 0 ? (
                            part
                          ) : (
                            <strong
                              key={j}
                              className="text-[#8a7208] font-semibold"
                            >
                              {part}
                            </strong>
                          )
                        )}
                      </span>
                    </li>
                  ))}
                </ListTag>
              </div>
            );
          }

          case 'table':
            return (
              <div
                key={index}
                className="mb-12 overflow-hidden rounded-xl shadow-lg border border-gray-200"
              >
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-linear-to-r from-[#8a7208] to-[#6b5a06] text-white">
                        {item.headers.map((header, i) => (
                          <th
                            key={i}
                            className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider border-r border-white/20 last:border-r-0"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {item.rows.map((row, i) => (
                        <tr
                          key={i}
                          className={`${
                            i % 2 === 0
                              ? 'bg-white hover:bg-gray-50'
                              : 'bg-gray-50 hover:bg-white'
                          } transition-colors duration-200`}
                        >
                          {row.map((cell, j) => (
                            <td
                              key={j}
                              className="px-6 py-4 text-gray-700 border-r border-gray-200 last:border-r-0 font-medium"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );

          case 'quote':
            return (
              <blockquote key={index} className="mb-8 relative">
                <div className="bg-linear-to-r from-amber-50 to-yellow-50 border-l-4 border-[#8a7208] rounded-r-xl p-6 shadow-sm">
                  <div className="relative">
                    <svg
                      className="absolute top-0 left-0 w-8 h-8 text-[#8a7208] opacity-25 -mt-2 -ml-2"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-700 italic text-lg leading-relaxed pl-6">
                      {item.text}
                    </p>
                  </div>
                </div>
              </blockquote>
            );

          case 'callout': {
            const calloutStyles = {
              info: 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 text-blue-800',
              warning:
                'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200 text-amber-800',
              success:
                'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-800',
              error:
                'bg-gradient-to-r from-red-50 to-rose-50 border-red-200 text-red-800',
            };

            return (
              <div
                key={index}
                className={`mb-8 border-l-4 rounded-r-xl p-6 shadow-sm ${
                  calloutStyles[item.variant] || calloutStyles.info
                }`}
              >
                <p className="font-medium leading-relaxed">{item.text}</p>
              </div>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
};

export default ContentRenderer;
