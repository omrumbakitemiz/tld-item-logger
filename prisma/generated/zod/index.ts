import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const PinScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','regionId','regionName','regionMapWidth','regionMapHeight','itemId','itemCount','itemName','itemImagePath','itemXCoordinate','itemYCoordinate']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// PIN SCHEMA
/////////////////////////////////////////

export const PinSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  regionId: z.number().int(),
  regionName: z.string(),
  regionMapWidth: z.number().int(),
  regionMapHeight: z.number().int(),
  itemId: z.number().int(),
  itemCount: z.number().int(),
  itemName: z.string(),
  itemImagePath: z.string(),
  itemXCoordinate: z.number().int(),
  itemYCoordinate: z.number().int(),
})

export type Pin = z.infer<typeof PinSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// PIN
//------------------------------------------------------

export const PinSelectSchema: z.ZodType<Prisma.PinSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  regionId: z.boolean().optional(),
  regionName: z.boolean().optional(),
  regionMapWidth: z.boolean().optional(),
  regionMapHeight: z.boolean().optional(),
  itemId: z.boolean().optional(),
  itemCount: z.boolean().optional(),
  itemName: z.boolean().optional(),
  itemImagePath: z.boolean().optional(),
  itemXCoordinate: z.boolean().optional(),
  itemYCoordinate: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const PinWhereInputSchema: z.ZodType<Prisma.PinWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PinWhereInputSchema),z.lazy(() => PinWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PinWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PinWhereInputSchema),z.lazy(() => PinWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  regionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  regionName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  regionMapWidth: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  regionMapHeight: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  itemId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  itemCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  itemName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  itemImagePath: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  itemXCoordinate: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  itemYCoordinate: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const PinOrderByWithRelationInputSchema: z.ZodType<Prisma.PinOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  regionId: z.lazy(() => SortOrderSchema).optional(),
  regionName: z.lazy(() => SortOrderSchema).optional(),
  regionMapWidth: z.lazy(() => SortOrderSchema).optional(),
  regionMapHeight: z.lazy(() => SortOrderSchema).optional(),
  itemId: z.lazy(() => SortOrderSchema).optional(),
  itemCount: z.lazy(() => SortOrderSchema).optional(),
  itemName: z.lazy(() => SortOrderSchema).optional(),
  itemImagePath: z.lazy(() => SortOrderSchema).optional(),
  itemXCoordinate: z.lazy(() => SortOrderSchema).optional(),
  itemYCoordinate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PinWhereUniqueInputSchema: z.ZodType<Prisma.PinWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const PinOrderByWithAggregationInputSchema: z.ZodType<Prisma.PinOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  regionId: z.lazy(() => SortOrderSchema).optional(),
  regionName: z.lazy(() => SortOrderSchema).optional(),
  regionMapWidth: z.lazy(() => SortOrderSchema).optional(),
  regionMapHeight: z.lazy(() => SortOrderSchema).optional(),
  itemId: z.lazy(() => SortOrderSchema).optional(),
  itemCount: z.lazy(() => SortOrderSchema).optional(),
  itemName: z.lazy(() => SortOrderSchema).optional(),
  itemImagePath: z.lazy(() => SortOrderSchema).optional(),
  itemXCoordinate: z.lazy(() => SortOrderSchema).optional(),
  itemYCoordinate: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PinCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PinAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PinMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PinMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PinSumOrderByAggregateInputSchema).optional()
}).strict();

export const PinScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PinScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PinScalarWhereWithAggregatesInputSchema),z.lazy(() => PinScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PinScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PinScalarWhereWithAggregatesInputSchema),z.lazy(() => PinScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  regionId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  regionName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  regionMapWidth: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  regionMapHeight: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  itemId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  itemCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  itemName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  itemImagePath: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  itemXCoordinate: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  itemYCoordinate: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const PinCreateInputSchema: z.ZodType<Prisma.PinCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  regionId: z.number().int(),
  regionName: z.string(),
  regionMapWidth: z.number().int(),
  regionMapHeight: z.number().int(),
  itemId: z.number().int(),
  itemCount: z.number().int(),
  itemName: z.string(),
  itemImagePath: z.string(),
  itemXCoordinate: z.number().int(),
  itemYCoordinate: z.number().int()
}).strict();

export const PinUncheckedCreateInputSchema: z.ZodType<Prisma.PinUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  regionId: z.number().int(),
  regionName: z.string(),
  regionMapWidth: z.number().int(),
  regionMapHeight: z.number().int(),
  itemId: z.number().int(),
  itemCount: z.number().int(),
  itemName: z.string(),
  itemImagePath: z.string(),
  itemXCoordinate: z.number().int(),
  itemYCoordinate: z.number().int()
}).strict();

export const PinUpdateInputSchema: z.ZodType<Prisma.PinUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  regionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  regionName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regionMapWidth: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  regionMapHeight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  itemId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  itemCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  itemName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  itemImagePath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  itemXCoordinate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  itemYCoordinate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PinUncheckedUpdateInputSchema: z.ZodType<Prisma.PinUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  regionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  regionName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regionMapWidth: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  regionMapHeight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  itemId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  itemCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  itemName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  itemImagePath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  itemXCoordinate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  itemYCoordinate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PinCreateManyInputSchema: z.ZodType<Prisma.PinCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  regionId: z.number().int(),
  regionName: z.string(),
  regionMapWidth: z.number().int(),
  regionMapHeight: z.number().int(),
  itemId: z.number().int(),
  itemCount: z.number().int(),
  itemName: z.string(),
  itemImagePath: z.string(),
  itemXCoordinate: z.number().int(),
  itemYCoordinate: z.number().int()
}).strict();

export const PinUpdateManyMutationInputSchema: z.ZodType<Prisma.PinUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  regionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  regionName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regionMapWidth: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  regionMapHeight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  itemId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  itemCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  itemName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  itemImagePath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  itemXCoordinate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  itemYCoordinate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PinUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PinUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  regionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  regionName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regionMapWidth: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  regionMapHeight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  itemId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  itemCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  itemName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  itemImagePath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  itemXCoordinate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  itemYCoordinate: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const PinCountOrderByAggregateInputSchema: z.ZodType<Prisma.PinCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  regionId: z.lazy(() => SortOrderSchema).optional(),
  regionName: z.lazy(() => SortOrderSchema).optional(),
  regionMapWidth: z.lazy(() => SortOrderSchema).optional(),
  regionMapHeight: z.lazy(() => SortOrderSchema).optional(),
  itemId: z.lazy(() => SortOrderSchema).optional(),
  itemCount: z.lazy(() => SortOrderSchema).optional(),
  itemName: z.lazy(() => SortOrderSchema).optional(),
  itemImagePath: z.lazy(() => SortOrderSchema).optional(),
  itemXCoordinate: z.lazy(() => SortOrderSchema).optional(),
  itemYCoordinate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PinAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PinAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  regionId: z.lazy(() => SortOrderSchema).optional(),
  regionMapWidth: z.lazy(() => SortOrderSchema).optional(),
  regionMapHeight: z.lazy(() => SortOrderSchema).optional(),
  itemId: z.lazy(() => SortOrderSchema).optional(),
  itemCount: z.lazy(() => SortOrderSchema).optional(),
  itemXCoordinate: z.lazy(() => SortOrderSchema).optional(),
  itemYCoordinate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PinMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PinMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  regionId: z.lazy(() => SortOrderSchema).optional(),
  regionName: z.lazy(() => SortOrderSchema).optional(),
  regionMapWidth: z.lazy(() => SortOrderSchema).optional(),
  regionMapHeight: z.lazy(() => SortOrderSchema).optional(),
  itemId: z.lazy(() => SortOrderSchema).optional(),
  itemCount: z.lazy(() => SortOrderSchema).optional(),
  itemName: z.lazy(() => SortOrderSchema).optional(),
  itemImagePath: z.lazy(() => SortOrderSchema).optional(),
  itemXCoordinate: z.lazy(() => SortOrderSchema).optional(),
  itemYCoordinate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PinMinOrderByAggregateInputSchema: z.ZodType<Prisma.PinMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  regionId: z.lazy(() => SortOrderSchema).optional(),
  regionName: z.lazy(() => SortOrderSchema).optional(),
  regionMapWidth: z.lazy(() => SortOrderSchema).optional(),
  regionMapHeight: z.lazy(() => SortOrderSchema).optional(),
  itemId: z.lazy(() => SortOrderSchema).optional(),
  itemCount: z.lazy(() => SortOrderSchema).optional(),
  itemName: z.lazy(() => SortOrderSchema).optional(),
  itemImagePath: z.lazy(() => SortOrderSchema).optional(),
  itemXCoordinate: z.lazy(() => SortOrderSchema).optional(),
  itemYCoordinate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PinSumOrderByAggregateInputSchema: z.ZodType<Prisma.PinSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  regionId: z.lazy(() => SortOrderSchema).optional(),
  regionMapWidth: z.lazy(() => SortOrderSchema).optional(),
  regionMapHeight: z.lazy(() => SortOrderSchema).optional(),
  itemId: z.lazy(() => SortOrderSchema).optional(),
  itemCount: z.lazy(() => SortOrderSchema).optional(),
  itemXCoordinate: z.lazy(() => SortOrderSchema).optional(),
  itemYCoordinate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const PinFindFirstArgsSchema: z.ZodType<Prisma.PinFindFirstArgs> = z.object({
  select: PinSelectSchema.optional(),
  where: PinWhereInputSchema.optional(),
  orderBy: z.union([ PinOrderByWithRelationInputSchema.array(),PinOrderByWithRelationInputSchema ]).optional(),
  cursor: PinWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PinScalarFieldEnumSchema.array().optional(),
}).strict()

export const PinFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PinFindFirstOrThrowArgs> = z.object({
  select: PinSelectSchema.optional(),
  where: PinWhereInputSchema.optional(),
  orderBy: z.union([ PinOrderByWithRelationInputSchema.array(),PinOrderByWithRelationInputSchema ]).optional(),
  cursor: PinWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PinScalarFieldEnumSchema.array().optional(),
}).strict()

export const PinFindManyArgsSchema: z.ZodType<Prisma.PinFindManyArgs> = z.object({
  select: PinSelectSchema.optional(),
  where: PinWhereInputSchema.optional(),
  orderBy: z.union([ PinOrderByWithRelationInputSchema.array(),PinOrderByWithRelationInputSchema ]).optional(),
  cursor: PinWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PinScalarFieldEnumSchema.array().optional(),
}).strict()

export const PinAggregateArgsSchema: z.ZodType<Prisma.PinAggregateArgs> = z.object({
  where: PinWhereInputSchema.optional(),
  orderBy: z.union([ PinOrderByWithRelationInputSchema.array(),PinOrderByWithRelationInputSchema ]).optional(),
  cursor: PinWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PinGroupByArgsSchema: z.ZodType<Prisma.PinGroupByArgs> = z.object({
  where: PinWhereInputSchema.optional(),
  orderBy: z.union([ PinOrderByWithAggregationInputSchema.array(),PinOrderByWithAggregationInputSchema ]).optional(),
  by: PinScalarFieldEnumSchema.array(),
  having: PinScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PinFindUniqueArgsSchema: z.ZodType<Prisma.PinFindUniqueArgs> = z.object({
  select: PinSelectSchema.optional(),
  where: PinWhereUniqueInputSchema,
}).strict()

export const PinFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PinFindUniqueOrThrowArgs> = z.object({
  select: PinSelectSchema.optional(),
  where: PinWhereUniqueInputSchema,
}).strict()

export const PinCreateArgsSchema: z.ZodType<Prisma.PinCreateArgs> = z.object({
  select: PinSelectSchema.optional(),
  data: z.union([ PinCreateInputSchema,PinUncheckedCreateInputSchema ]),
}).strict()

export const PinUpsertArgsSchema: z.ZodType<Prisma.PinUpsertArgs> = z.object({
  select: PinSelectSchema.optional(),
  where: PinWhereUniqueInputSchema,
  create: z.union([ PinCreateInputSchema,PinUncheckedCreateInputSchema ]),
  update: z.union([ PinUpdateInputSchema,PinUncheckedUpdateInputSchema ]),
}).strict()

export const PinCreateManyArgsSchema: z.ZodType<Prisma.PinCreateManyArgs> = z.object({
  data: z.union([ PinCreateManyInputSchema,PinCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const PinDeleteArgsSchema: z.ZodType<Prisma.PinDeleteArgs> = z.object({
  select: PinSelectSchema.optional(),
  where: PinWhereUniqueInputSchema,
}).strict()

export const PinUpdateArgsSchema: z.ZodType<Prisma.PinUpdateArgs> = z.object({
  select: PinSelectSchema.optional(),
  data: z.union([ PinUpdateInputSchema,PinUncheckedUpdateInputSchema ]),
  where: PinWhereUniqueInputSchema,
}).strict()

export const PinUpdateManyArgsSchema: z.ZodType<Prisma.PinUpdateManyArgs> = z.object({
  data: z.union([ PinUpdateManyMutationInputSchema,PinUncheckedUpdateManyInputSchema ]),
  where: PinWhereInputSchema.optional(),
}).strict()

export const PinDeleteManyArgsSchema: z.ZodType<Prisma.PinDeleteManyArgs> = z.object({
  where: PinWhereInputSchema.optional(),
}).strict()