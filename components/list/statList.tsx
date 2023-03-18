import { PokemonStatType } from "../../types";
import { changeStatText, StatColor } from "../../utils/dataFormat";
interface StatListType {
  item: PokemonStatType;
  width: string;
}

const StatList = ({item, width}: StatListType) => {
  return (
    <dl>
      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{ changeStatText(item.stat.name) }</dt>
      <dd className="flex items-center mb-3">
        <div className="w-full bg-gray-200 rounded h-3 dark:bg-gray-700 mr-2">
          <div className={`h-3 rounded dark:bg-blue-500`} style={{ width: width, backgroundColor: StatColor(item.stat.name) }}/>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{ item.base_stat }</span>
      </dd>
    </dl>
  )
};

export default StatList;