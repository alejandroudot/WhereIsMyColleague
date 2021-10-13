import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  VStack,
  HStack,
  Image,
  Text,
  Select,
  CheckIcon,
  Box,
  Heading,
  AspectRatio,
  Stack,
  Button,
  useToast,
  AlertDialog,
} from "native-base";
import {
  byCountry,
  allBranches,
  deleteBranch,
  singleBranch,
} from "../store/BranchReducer";

export default function Branches() {
  const toast = useToast();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [branchCountry, setBranchCountry] = useState("");
  const branches = useSelector((state) => state.branches.allBranches);
  const countrySelected = useSelector((state) => state.branches.byCountry);
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  let uniqueMap = branches.map(({ country }) => country);
  let uniqueSet = [...new Set(uniqueMap)];

  const countryHandler = (itemValue) => {
    setBranchCountry(itemValue);
    dispatch(byCountry(itemValue));
  };
  useEffect(() => {
    dispatch(allBranches());
  }, []);

  const individualBranchHandler = (id) => {
    dispatch(singleBranch(id));
    navigation.navigate("Branch");
  };

  const deleteHandler = async (id) => {
    await dispatch(deleteBranch(id));
    dispatch(byCountry(branchCountry));
    setIsOpen(false);
    return dispatch(allBranches());
  };

  const singleBranchHandler = (id) => {
    dispatch(singleBranch(id));
    navigation.navigate("editBranch");
  };

  useEffect(() => {
    dispatch(allBranches());
  }, []);

  return (
    <ScrollView>
      <View>
        <VStack alignItems="center" space={4}>
          <Text style={styles.text}>Please, select the branch's country</Text>
          <Select
            selectedValue={branchCountry}
            minWidth="200"
            accessibilityLabel="Countries"
            placeholder="Countries"
            _selectedItem={{
              bg: "#39B54A",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => countryHandler(itemValue)}
          >
            {branches
              ? uniqueSet.map((country, i) => (
                  <Select.Item key={i} label={country} value={country} />
                ))
              : null}
          </Select>
        </VStack>
      </View>
      <View style={styles.cityCard}>
        {countrySelected
          ? countrySelected.map(({ id, city, address, image, CP, phone }) => (
              <Box
                key={id}
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}
              >
                <Box>
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      source={{
                        uri: image,
                      }}
                      alt="image"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      {city}
                    </Heading>
                    <Text
                      fontSize="xs"
                      _light={{
                        color: "violet.500",
                      }}
                      _dark={{
                        color: "violet.400",
                      }}
                      fontWeight="500"
                      ml="-0.5"
                      mt="-1"
                    >
                      {`${address}, ${CP}`}
                      {/* {floor.length > 0 ? floor : null} */}
                    </Text>
                  </Stack>
                  <Text fontWeight="400">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Text>
                  <HStack
                    alignItems="center"
                    space={4}
                    justifyContent="space-between"
                  >
                    <HStack alignItems="center"></HStack>
                  </HStack>
                </Stack>
                <View style={styles.Btns}>
                  <Button
                    bg="#A6CE39"
                    size="sm"
                    /* variant="outline" */
                    width={20}
                    height={7}
                    marginLeft={2}
                    marginRight={2}
                    onPress={() => individualBranchHandler(id)}
                  >
                    View
                  </Button>
                  <Button
                    bg="#A6CE39"
                    size="sm"
                    /* variant="outline" */ width={20}
                    height={7}
                    onPress={() => singleBranchHandler(id)}
                  >
                    Edit
                  </Button>
                  <Button
                    bg="#A6CE39"
                    size="sm"
                    /* variant="outline" */
                    width={20}
                    height={7}
                    marginLeft={2}
                    onPress={() => setIsOpen(!isOpen)}
                  >
                    Delete
                  </Button>
                  <AlertDialog isOpen={isOpen} onClose={onClose}>
                    <AlertDialog.Content>
                      <AlertDialog.CloseButton />
                      <AlertDialog.Header>Are you sure?</AlertDialog.Header>
                      <AlertDialog.Body>
                        This will remove all data relating to the branch.
                      </AlertDialog.Body>
                      <AlertDialog.Footer>
                        <Button
                          colorScheme="danger"
                          onPress={() => deleteHandler(id)}
                        >
                          Delete branch
                        </Button>
                      </AlertDialog.Footer>
                    </AlertDialog.Content>
                  </AlertDialog>
                </View>
              </Box>
            ))
          : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  cityCard: {
    marginTop: 15,
  },
  Btns: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
});
