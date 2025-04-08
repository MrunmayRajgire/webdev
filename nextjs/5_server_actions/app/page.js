import Image from "next/image";

export default function Home() {
  return (
    <div className="w-2/3 mx-auto my-12">
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" className="text-white mx-4" type="text" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input name="add" className="text-white mx-4" type="text" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
