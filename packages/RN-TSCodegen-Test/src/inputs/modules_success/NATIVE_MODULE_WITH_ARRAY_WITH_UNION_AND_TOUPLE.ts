
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/NATIVE_MODULE_WITH_ARRAY_WITH_UNION_AND_TOUPLE.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from '../../lib/RCTExport'
import * as TurboModuleRegistry from '../../lib/TurboModuleRegistry';
'use strict';

export interface Spec extends TurboModule {
  getArray(arg: Array<[string, string]>): Array<string | number | boolean>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


