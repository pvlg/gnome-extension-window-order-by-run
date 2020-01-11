const Workspace = imports.ui.workspace;

function _sortRow(row) {
  row.windows.sort((a, b) => a.metaWindow.get_stable_sequence() > b.metaWindow.get_stable_sequence());
}

let sortRow_original = null;

function enable() {
  sortRow_original = Workspace.UnalignedLayoutStrategy.prototype._sortRow;
  Workspace.UnalignedLayoutStrategy.prototype._sortRow = _sortRow;
}

function disable() {
  Workspace.UnalignedLayoutStrategy.prototype._sortRow = sortRow_original;
}
