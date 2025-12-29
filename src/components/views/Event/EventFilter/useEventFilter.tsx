import categoryServices from "@/services/category.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  category: yup.string(),
  isOnline: yup.string(),
  isFeatured: yup.string(),
});

const useEventFilter = () => {
  const { control, reset, watch, getValues, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const { data: dataCategory, isSuccess: isSuccessGetCategory } = useQuery({
    queryKey: ["Categories"],
    queryFn: () => categoryServices.getCategories(),
  });

  return {
    control,
    setValue,
    dataCategory,
    isSuccessGetCategory,
  };
};

export default useEventFilter;
