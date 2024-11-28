const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);

  return (
    <main className="flex-1 overflow-y-auto p-4 space-y-4">
      {skeletonMessages.map((_, index) => (
        <section
          key={index}
          className={`chat ${index % 2 === 0 ? "chat-start" : "chat-end"}`}
        >
          <article className="chat-image avatar">
            <div className="size-10 rounded-full">
              <div className="skeleton w-full h-full rounded-full" />
            </div>
          </article>

          <article className="chat-header mb-1">
            <div className="skeleton h-4 w-16" />
          </article>

          <article className="chat-bubble bg-transparent p-0">
            <div className="skeleton h-16 w-[200px]" />
          </article>
        </section>
      ))}
    </main>
  );
};

export default MessageSkeleton;
