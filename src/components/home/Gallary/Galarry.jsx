import React from "react";

const Galarry = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-[400px] border my-10 p-2 lg:p-10">
      <h2 className="text-3xl text-center font-bold my-4">Gallary</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <img
          className="w-full h-52 rounded-md"
          src="https://plus.unsplash.com/premium_photo-1670240880649-65fff9143ec3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80"
        />
        <img
          className="w-full h-52 rounded-md"
          src="https://images.unsplash.com/photo-1606908487894-c7e94a213233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=926&q=80"
        />
        <img
          className="w-full h-52 rounded-md"
          src="https://images.unsplash.com/photo-1574405345169-f45c7d66480e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
        />
        <img
          className="w-full h-52 rounded-md"
          src="https://media.istockphoto.com/id/1304140612/photo/welcome-in-different-language-on-paper-with-world-map-background.jpg?s=2048x2048&w=is&k=20&c=EQ7Sjt5vc7DLzrD8c-55YCp0ldWeBtuzl5472kh4AYc="
        />
      </div>
    </div>
  );
};

export default Galarry;
