import MainLayout from "../layout/main.layout";

export default function HomePage() {
    return (
      <MainLayout>
        <div className="flex w-full">
          <div className="flex-1 bg-blue-400">Catalog Product Here</div>
        </div>
      </MainLayout>
    );
}