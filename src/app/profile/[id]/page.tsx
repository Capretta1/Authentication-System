function userProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>profile </h1>
      <hr />
      <p className="text-4xl ">
        Profile Page{" "}
        <span className="p-2 ml-2 rounded bg-orange-500 text-black">
          {params.id}
        </span>
      </p>
    </div>
  );
}

export default userProfile;
