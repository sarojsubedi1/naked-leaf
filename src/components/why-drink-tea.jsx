import { HeartIcon } from "lucide-react";
import { ActivityIcon } from "lucide-react";
import { GlassWaterIcon } from "lucide-react";

export default function WhyDrinkTea() {
  return (
    <section className="p-6 bg-green-100">
      <h2 className="text-2xl font-bold text-center mb-6">Why Drink Tea?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col items-center text-center p-4">
          <HeartIcon className="h-12 w-12 mb-4 text-green-600 dark:text-green-300" />
          <h3 className="text-lg font-medium mb-2">Improved Health</h3>
          <p className="text-gray-500">
            Tea is packed with antioxidants and has less caffeine than coffee.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <ActivityIcon className="h-12 w-12 mb-4 text-green-600 dark:text-green-300" />
          <h3 className="text-lg font-medium mb-2">Relaxation</h3>
          <p className="text-gray-500">
            Drinking tea can help reduce stress and promote relaxation.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <GlassWaterIcon className="h-12 w-12 mb-4 text-green-600 dark:text-green-300" />
          <h3 className="text-lg font-medium mb-2">Hydration</h3>
          <p className="text-gray-500">
            Tea can contribute to your daily hydration needs.
          </p>
        </div>
      </div>
    </section>
  );
}
